import React, { useState, useEffect, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './CreateCvPersonal.css';
import Footer from "../Components/Footer";
import placeholder from '../../images/profile_placeholder.png';
import Slider from "@mui/material/Slider";
import getCroppedImg from "../../utils/cropImage";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CloseIcon from '@mui/icons-material/Close';
import CropIcon from '@mui/icons-material/Crop';
import SaveIcon from '@mui/icons-material/Save';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
import FileUploadIcon from '@mui/icons-material/FileUpload';

// Stepper component
const steps = [
  { label: "Adatok", path: "/createcv/personal-data" },
  { label: "Tapasztalatok", path: "/createcv/experience" },
  { label: "Tanulmányok", path: "/createcv/education" },
  { label: "Sablon", path: "/createcv/template" },
];


function StepProgress() {
  const location = useLocation();

  return (
    <div className="step-progress">
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;
        const isCompleted =
          steps.findIndex((s) => s.path === location.pathname) > index;

        return (
          <div key={step.path} className="step-wrapper">
            <Link
              to={step.path}
              className={`step ${isActive ? "active" : ""} ${
                isCompleted ? "completed" : ""
              }`}
            >
              <span className="step-index">{index + 1}</span>
              <span className="step-label">{step.label}</span>
            </Link>
            {index < steps.length - 1 && <div className="step-line"></div>}
          </div>
        );
      })}
    </div>
  );
}

// Main form component
export default function CreateCvPersonal() {
  const [form, setForm] = useState({
    profile_picture: null,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    introduction: "",
  });
  const [preview, setPreview] = useState(placeholder);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // Checkbox
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // 👇 This restores saved data (and preview) from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem("personalData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setForm((prev) => ({ ...prev, ...parsed }));
      if (parsed.profile_picture) {
        setPreview(parsed.profile_picture); 
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setForm({ ...form, profile_picture: file || null });

    if (file) {
      setPreview(URL.createObjectURL(file)); // show selected file
    } else {
      setPreview("/images/profile_placeholder.png"); // fallback to placeholder
    }
  };





  //Cropping
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // Called when cropping area changes
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  // Generate cropped image
  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImageBlob = await getCroppedImg(preview, croppedAreaPixels, 500, 500);
      setCroppedImage(croppedImageBlob);

      // Update form for upload
      const file = new File([croppedImageBlob], "profile_picture.png", { type: "image/png" });
      setForm({ ...form, profile_picture: file });
      setPreview(URL.createObjectURL(croppedImageBlob));

      // Reset zoom
      setZoom(1); 
      setCrop({ x: 0, y: 0 }); 
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, preview]);


  // Toest saved image feedback to user
  const [toastOpen, setToastOpen] = useState(false);
  const handleSaveCrop = async () => {
    await showCroppedImage(); 
    setToastOpen(true); 
  };
  // Close toast
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") return;
    setToastOpen(false);
  };



  // Reset profile picture function
  const handleResetProfile = () => {
    setForm((prev) => ({ ...prev, profile_picture: null })); 
    setPreview(placeholder); 
    setCroppedImage(null); 
    setZoom(1);
    setCrop({ x: 0, y: 0 });
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    // Checkbox checked
    if (!acceptedTerms) {
      setMessage("Kérjük, fogadja el az adatvédelmi irányelveket és feltételeket!");
      return;
    }

    try {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      // Only append if the value exists
      if (value) {
        // For profile_picture, only append if it's a real File object
        if (key === "profile_picture") {
          if (value instanceof File) {
            formData.append(key, value);
          }
        } else {
          formData.append(key, value);
        }
      }
    });

    const response = await axios.post(
      "https://cvkeszito.hu/api/personal-data",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // Save to sessionStorage
    sessionStorage.setItem("personalData", JSON.stringify(response.data.data));

    // Update preview with server URL (instead of blob:)
    if (response.data.data.profile_picture) {
      setPreview(response.data.data.profile_picture);
    }

    setMessage(response.data.message);
    navigate("/createcv/experience");

  } catch (error) {
    if (error.response?.data?.errors) {
      setMessage(Object.values(error.response.data.errors).join(" "));
    } else {
      setMessage(error.response?.data?.message || "Hiba történt!");
    }
  }
};

  return (
    <>
    <div className="page-content personal-page-content">
      <StepProgress />

      <div className="createcv-form-card personal-form-card">
        <h1 className="create-cv-title">Adatok</h1>
        <p className="create-cv-description">Az alábbi mezőkben megadott adatok az Ön önéletrajzában fognak megjelenni. Kérjük, adja meg őket figyelmesen és helyesen.</p>
        <form onSubmit={handleSubmit} className="personal-form">
          <div className="profile-picture-container-outer">
            <p className="profile-picture-label">Profilkép</p>
            <span className="profile-picture-markup">
              Kérjük töltse fel a profilképét! (JPG, PNG formátum, max. 10MB)
            </span>
            <div className="profile-picture-container-inner">
              <input
                id="profilePictureInput"
                type="file"
                name="profile_picture"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="profilePictureInput" className="file-input-label">
                <FileUploadIcon style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Profilkép kiválasztása
              </label>

              <div className="image-preview">
                <div className="crop-container" style={{ position: "relative", width: 300, height: 300 }}>
                    <Cropper
                      image={preview}
                      crop={crop}
                      zoom={zoom}
                      aspect={1} // ensures square crop
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                    />

                    {/* Reset icon */}
                    <CloseIcon
                      onClick={handleResetProfile}
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        cursor: "pointer",
                        color: "#fff",
                        backgroundColor: "black",
                        borderRadius: "50%",
                        padding: 4,
                        zIndex: 10,
                      }}
                    />
                  </div>
                  <Slider
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                  <div className="profile-button-container">
                    <button type="button" onClick={showCroppedImage} className="icon-button">
                      <CropIcon />
                      Átméretezés
                    </button>

                    <button type="button" onClick={handleSaveCrop} className="icon-button">
                      <SaveIcon/>
                      Mentés
                    </button>
                  </div>
                  <Snackbar
                    open={toastOpen}
                    autoHideDuration={3000}
                    onClose={handleToastClose}
                    anchorOrigin={{ vertical: "center", horizontal: "center" }}
                  >
                    <Alert onClose={handleToastClose} severity="success" sx={{ width: '100%' }}>
                      A profilképet elmentettük.
                    </Alert>
                  </Snackbar>
              </div>
            </div>
          </div>

          <p className="personal-data-label">Személyes adatok:</p>
          <span className="personal-data-description">Kérjük adja meg személyes adatait, melyeket elhelyezhetünk önéletrajzán.</span>
          <div className="personal-contact-wrapper">
          <input
            type="text"
            name="last_name"
            placeholder="Vezetéknév"
            value={form.last_name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="first_name"
            placeholder="Keresztnév"
            value={form.first_name}
            onChange={handleChange}
            required
          />
          </div>
          <div className="personal-contact-wrapper">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefonszám"
            value={form.phone}
            onChange={handleChange}
          />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Cím"
            value={form.address}
            onChange={handleChange}
          />
          <p className="personal-data-label">Bemutatkozás:</p>
          <span className="personal-data-description">Kérjük írja le pár szóban mivel foglalkozik.</span>
          <textarea
            name="introduction"
            className="introduction"
            placeholder="Bemutatkozó"
            value={form.introduction}
            onChange={handleChange}
            rows={4}
          />
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="acceptedTerms"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            <label className="checkbox-content" htmlFor="acceptedTerms">
              <span>Elfogadom az&nbsp;</span>
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">adatvédelmi irányelveket</a>
              <span>,&nbsp;</span>
              <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">süti tájékoztatót</a>
              <span>&nbsp;és az&nbsp;</span>
              <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">általános szerződési feltételeket</a>
              <span>.</span>
            </label>
          </div>
          <button className="continue-button" type="submit">Mentés és továbblépés</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
    <Footer />
    </>
  );
}

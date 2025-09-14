import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Parse PDF URL from query string
    const params = new URLSearchParams(location.search);
    const pdfUrl = params.get("pdfUrl");

    if (pdfUrl) {
      // Save payment state to sessionStorage
      sessionStorage.setItem("hasPaid", "true");
      sessionStorage.setItem("paidPdfUrl", pdfUrl);
    }

    // Redirect back to template page
    navigate("/createcv/template");
  }, []);

  return <div>Sikeres fizetés! Most átirányítjuk önt...</div>;
}
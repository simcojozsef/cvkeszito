<h2>Új üzenet érkezett a CVKeszito honlapról</h2>

<p><strong>Név:</strong> {{ $data['vezeteknev'] }} {{ $data['keresztnev'] }}</p>
<p><strong>E-mail:</strong> {{ $data['email'] }}</p>
@if(!empty($data['telefon']))
<p><strong>Telefon:</strong> {{ $data['telefon'] }}</p>
@endif
<p><strong>Üzenet:</strong></p>
<p>{{ $data['uzenet'] }}</p>
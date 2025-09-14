<h2>Welcome {{ $data['first_name'] }} {{ $data['last_name'] }}!</h2>

<p>Your account for the CV dashboard has been created.</p>

<p><strong>Email:</strong> {{ $data['email'] }}</p>
<p><strong>Password:</strong> {{ $data['password'] }}</p>

<p>Please log in at <a href="{{ url('/login') }}">our dashboard</a> and change your password after first login.</p>

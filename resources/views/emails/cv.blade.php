@component('mail::message')
Kedves {{ $firstName }},

Csatoltan küldjük önéletrajzát, melyet később a weboldalunkon már nem ér el.

Köszönettel,<br>
{{ config('app.name') }}
@endcomponent
<!DOCTYPE html>
<html lang="hr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prijava – Anatomija</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="background">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Human_body_silhouette.svg" alt="body">
    </div>

    <div class="login-container">
        <h2>Prijava u aplikaciju</h2>
        <p class="subtitle">Anatomija ljudskog tijela</p>

        <form action="/login" method="POST">
            <label for="email">Email ili korisničko ime:</label>
            <input type="text" id="email" name="email" required>

            <label for="password">Lozinka:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Prijavi se</button>
        </form>

        <p class="register-link">
            Nemaš račun? <a href="#">Registriraj se</a>
        </p>
    </div>

</body>
</html>

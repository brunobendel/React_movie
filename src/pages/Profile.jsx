import '../styles/profile.css'

export default function Profile() {
  return (
    <div className="pages">
      <div id="container">
        <div id="profile">
          <img
            src="https://avatars.githubusercontent.com/u/75317932?v=4"
            alt="avatar Bruno"
          />
          <p>@Brunobendel</p>
        </div>
        <div id="social-links">
          <a href="https://github.com/Brunobendel" target="_blank">
            <ion-icon id="icon" name="logo-github"></ion-icon>
          </a>

          <a href="https://www.instagram.com/bruno_bendel/" target="_blank">
            <ion-icon id="icon" name="logo-instagram"></ion-icon>
          </a>

          <a href="https://youtube.com/" target="_blank">
            <ion-icon id="icon" name="logo-youtube"></ion-icon>
          </a>

          <a
            href="https://www.linkedin.com/in/brunobendelrodrigues/"
            target="_blank"
          >
            <ion-icon id="icon" name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  )
}
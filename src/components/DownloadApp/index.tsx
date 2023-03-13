import * as C from "./styles"

import googlePlay from "@/assets/googlePlay.png";
import appStore from "@/assets/appleStore.png";
import screens from "@/assets/screens.png";


const DownloadApp = () => {
  return (
    <C.Container>

      <div className="info">
        <h1>Download Now Travel Community Apps</h1>
        <div className="downloads">
          <img src={googlePlay} alt="google Play" />
          <img src={appStore} alt="apple store" />
        </div>
      </div>
      <img src={screens} alt="screens" className="screens" />
    </C.Container>
  )
}

export default DownloadApp
import { GoBell, GoCloudDownload, GoCircleSlash } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary className="mb-5">
          Click here! <GoBell></GoBell>
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hello! <GoCloudDownload></GoCloudDownload>
        </Button>
      </div>
      <div>
        <Button success>
          Fine <GoCircleSlash></GoCircleSlash>
        </Button>
      </div>
      <div>
        <Button warning>Okay</Button>
      </div>
      <div>
        <Button danger>Anyway</Button>
      </div>
      App
    </div>
  );
}

export default ButtonPage;

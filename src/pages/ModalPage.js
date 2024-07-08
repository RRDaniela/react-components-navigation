import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      {" "}
      <p> Here is an important agreement for you to accept</p>{" "}
    </Modal>
  );
  return (
    <div className="relative">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis
        ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at metus
        vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis
        id, aliquam at elit. Sed at metus vestibulum, tincidunt nisl eget,
        hendrerit est. Aenean eu vehicula massa, nec maximus quam. Nam sodales
        risus sit amet massa lacinia pretium. Ut fermentum velit dignissim ex
        consectetur, in luctus nisi commodo. Etiam non ex quis ligula cursus
        aliquam. Praesent consectetur maximus diam sed lobortis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent felis ipsum,
        pulvinar quis iaculis id, aliquam at elit. Sed at metus vestibulum,
        tincidunt nisl eget, hendrerit est. Aenean eu vehicula massa, nec
        maximus quam. Nam sodales risus sit amet massa lacinia pretium. Ut
        fermentum velit dignissim ex consectetur, in luctus nisi commodo. Etiam
        non ex quis ligula cursus aliquam. Praesent consectetur maximus diam sed
        lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent felis ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at
        metus vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis
        id, aliquam at elit. Sed at metus vestibulum, tincidunt nisl eget,
        hendrerit est. Aenean eu vehicula massa, nec maximus quam. Nam sodales
        risus sit amet massa lacinia pretium. Ut fermentum velit dignissim ex
        consectetur, in luctus nisi commodo. Etiam non ex quis ligula cursus
        aliquam. Praesent consectetur maximus diam sed lobortis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent felis ipsum,
        pulvinar quis iaculis id, aliquam at elit. Sed at metus vestibulum,
        tincidunt nisl eget, hendrerit est. Aenean eu vehicula massa, nec
        maximus quam. Nam sodales risus sit amet massa lacinia pretium. Ut
        fermentum velit dignissim ex consectetur, in luctus nisi commodo. Etiam
        non ex quis ligula cursus aliquam. Praesent consectetur maximus diam sed
        lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent felis ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at
        metus vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis
        id, aliquam at elit. Sed at metus vestibulum, tincidunt nisl eget,
        hendrerit est. Aenean eu vehicula massa, nec maximus quam. Nam sodales
        risus sit amet massa lacinia pretium. Ut fermentum velit dignissim ex
        consectetur, in luctus nisi commodo. Etiam non ex quis ligula cursus
        aliquam. Praesent consectetur maximus diam sed lobortis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent felis ipsum,
        pulvinar quis iaculis id, aliquam at elit. Sed at metus vestibulum,
        tincidunt nisl eget, hendrerit est. Aenean eu vehicula massa, nec
        maximus quam. Nam sodales risus sit amet massa lacinia pretium. Ut
        fermentum velit dignissim ex consectetur, in luctus nisi commodo. Etiam
        non ex quis ligula cursus aliquam. Praesent consectetur maximus diam sed
        lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent felis ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at
        metus vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis
        id, aliquam at elit. Sed at metus vestibulum, tincidunt nisl eget,
        hendrerit est. Aenean eu vehicula massa, nec maximus quam. Nam sodales
        risus sit amet massa lacinia pretium. Ut fermentum velit dignissim ex
        consectetur, in luctus nisi commodo. Etiam non ex quis ligula cursus
        aliquam. Praesent consectetur maximus diam sed lobortis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent felis ipsum,
        pulvinar quis iaculis id, aliquam at elit. Sed at metus vestibulum,
        tincidunt nisl eget, hendrerit est. Aenean eu vehicula massa, nec
        maximus quam. Nam sodales risus sit amet massa lacinia pretium. Ut
        fermentum velit dignissim ex consectetur, in luctus nisi commodo. Etiam
        non ex quis ligula cursus aliquam. Praesent consectetur maximus diam sed
        lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent felis ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at
        metus vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis
        id, aliquam at elit. Sed at metus vestibulum, tincidunt nisl eget,
        hendrerit est. Aenean eu vehicula massa, nec maximus quam. Nam sodales
        risus sit amet massa lacinia pretium. Ut fermentum velit dignissim ex
        consectetur, in luctus nisi commodo. Etiam non ex quis ligula cursus
        aliquam. Praesent consectetur maximus diam sed lobortis. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Praesent felis ipsum,
        pulvinar quis iaculis id, aliquam at elit. Sed at metus vestibulum,
        tincidunt nisl eget, hendrerit est. Aenean eu vehicula massa, nec
        maximus quam. Nam sodales risus sit amet massa lacinia pretium. Ut
        fermentum velit dignissim ex consectetur, in luctus nisi commodo. Etiam
        non ex quis ligula cursus aliquam. Praesent consectetur maximus diam sed
        lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent felis ipsum, pulvinar quis iaculis id, aliquam at elit. Sed at
        metus vestibulum, tincidunt nisl eget, hendrerit est. Aenean eu vehicula
        massa, nec maximus quam. Nam sodales risus sit amet massa lacinia
        pretium. Ut fermentum velit dignissim ex consectetur, in luctus nisi
        commodo. Etiam non ex quis ligula cursus aliquam. Praesent consectetur
        maximus diam sed lobortis. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent felis ipsum, pulvinar quis iaculis id, aliquam
        at elit. Sed at metus vestibulum, tincidunt nisl eget, hendrerit est.
        Aenean eu vehicula massa, nec maximus quam. Nam sodales risus sit amet
        massa lacinia pretium. Ut fermentum velit dignissim ex consectetur, in
        luctus nisi commodo. Etiam non ex quis ligula cursus aliquam. Praesent
        consectetur maximus diam sed lobortis.
      </p>
      <Button primary onClick={handleClick}>
        Open modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;

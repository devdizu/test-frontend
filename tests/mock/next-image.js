import * as nextImage from "next/image";

export default {
  mock: () =>
    Object.defineProperty(nextImage, "default", {
      configurable: true,
      value: (props) => {
        return <img {...props} />;
      },
    }),
};

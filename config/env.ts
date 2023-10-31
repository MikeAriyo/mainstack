import throwIfUndefined from "./throwIfUndefined";

const Environment = {
  NEXT_PUBLIC_BASE_URL: throwIfUndefined(
    "Base url",
    process.env.NEXT_PUBLIC_BASE_URL
  ),
};

export default Environment;

import * as motion from "motion/react-client";

export default function Rotate({
  bg,
  width = 100,
  height = "auto",
}: {
  bg: string;
  width?: string | number;
  height?: string | number;
}) {
  return (
    <motion.div
      style={{
        width,
        height,
        borderRadius: "100%",
        backgroundColor: bg,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 5 }}
    />
  );
}

/**
 * ==============   Styles   ================
 */

const box = {};

import * as motion from "motion/react-client";

export default function Rotate({
  bg,
  width = 100,
  height = "auto",
  isSquare = false,
}: {
  bg: string;
  width?: string | number;
  height?: string | number;
  isSquare?: boolean;
}) {
  return (
    <motion.div
      style={{
        width,
        height,
        borderRadius: isSquare ? "0%" : "100%",
        backgroundColor: bg,
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 15 }}
    />
  );
}

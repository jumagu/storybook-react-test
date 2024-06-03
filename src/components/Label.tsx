import "./Label.css";

interface LabelProps {
  /**
   * Text to display
   */
  name: string;
  /**
   * Font size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizes first letter of each word
   */
  capitalize?: boolean;
  /**
   * What font color to use
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * What custom color to use
   */
  customColor?: string;
}

export const Label = ({
  name,
  size = "normal",
  capitalize = false,
  color,
  customColor,
}: LabelProps) => {
  return (
    <span
      className={`label ${size} ${color}`}
      style={{
        color: customColor,
        textTransform: capitalize ? "capitalize" : "unset",
      }}
    >
      {name}
    </span>
  );
};

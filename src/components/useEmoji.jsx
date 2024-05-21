import emojiHappy from "../assets/emoji-happy.svg";
import emojiUnhappy from "../assets/emoji-unhappy.svg";
import emojiNeutral from "../assets/emoji-neutral.svg";
import emojiNone from "../assets/emoji-none.svg";

const useEmoji = (popularity) => {
  const getEmoji = () => {
    if (popularity > 6.6) {
      return emojiHappy;
    } else if (popularity <= 6.6 && popularity >= 3.3) {
      return emojiNeutral;
    } else if (popularity <= 3.3) {
      return emojiUnhappy;
    } else {
      return emojiNone;
    }
  };

  const getTextColor = () => {
    if (popularity > 6.6) {
      return "green";
    } else if (popularity <= 6.6 && popularity >= 3.3) {
      return "yellow";
    } else if (popularity <= 3.3) {
      return "red";
    } else {
      return "gray";
    }
  };

  return { getEmoji, getTextColor };
};

export default useEmoji;

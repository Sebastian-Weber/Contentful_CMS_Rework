import emojiHappy from "../assets/emoji-happy.svg";
import emojiUnhappy from "../assets/emoji-unhappy.svg";
import emojiNeutral from "../assets/emoji-neutral.svg";
import emojiNone from "../assets/emoji-none.svg";

const colors = {
  eCommerce:
    "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300",
  Data: "bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300",
  Finance:
    "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
  Social:
    "bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-green-900 dark:text-green-300",
  Education:
    "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300",
  Entertainment:
    "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-pink-900 dark:text-pink-300",
  Music:
    "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300",
  AI: "bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-1 rounded-full dark:bg-red-900 dark:text-red-300",
  Weather:
    "py-1 px-4 gap-2 font-semibold text-sm rounded-full text-slate-300 dark:text-cyan-400 bg-cyan-100",
};

function useGetEmoji() {
  if (popularity > 6.6) {
    return emojiHappy;
  } else if (popularity <= 6.6 && popularity >= 3.3) {
    return emojiNeutral;
  } else if (popularity <= 3.3) {
    return emojiUnhappy;
  } else {
    return emojiNone;
  }
}

//   return <div>GetEmoji</div>;

export default useGetEmoji;

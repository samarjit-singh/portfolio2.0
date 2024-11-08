import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-44 text-white flex items-center justify-center p-4 space-x-4 z-50">
      <a
        href="https://github.com/samarjit-singh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="hover:text-gray-500 text-black" />
      </a>
      <a
        href="https://www.linkedin.com/in/samarjit-singh-khanuja-595639200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="hover:text-gray-500 text-blue-600" />
      </a>
      <a
        href="https://x.com/samarji18087506"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} className="hover:text-gray-500 text-blue-400" />
      </a>
    </div>
  );
}

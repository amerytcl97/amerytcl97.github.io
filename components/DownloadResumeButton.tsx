const RESUME_NAME = 'resume.pdf';

const DownloadResumeButton = () => {
  return (
    <a href={`/${RESUME_NAME}`} download className="themed-button text-base">
      Resume
    </a>
  );
};

export default DownloadResumeButton;

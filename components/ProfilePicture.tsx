import Image from 'next/image';

const TEST_PORTRAIT =
  'https://w0.peakpx.com/wallpaper/883/900/HD-wallpaper-drawing-painting-looking-at-viewer-dark-women-portrait-fantasy-girl.jpg';

const ProfilePicture = () => {
  return (
    <div className="special-shadow relative mx-auto h-72 w-60 rounded-md">
      <Image
        src="/portraitself.jpg"
        alt="My profile picture"
        className="rounded-md object-cover"
        fill
      />
    </div>
  );
};

export default ProfilePicture;

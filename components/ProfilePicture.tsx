import Image from "next/image"

const ProfilePicture = () => {
    return (
        <div className="rounded-md h-[300px] w-[260px] relative special-shadow">
            <Image src="https://w0.peakpx.com/wallpaper/883/900/HD-wallpaper-drawing-painting-looking-at-viewer-dark-women-portrait-fantasy-girl.jpg"
                alt="My profile picture" className="rounded-md" fill />
        </div>
    )
}

export default ProfilePicture;
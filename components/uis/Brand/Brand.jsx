import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="https://res.cloudinary.com/dwsk5thfo/image/upload/v1738435901/bvul9lr6kfqkadjofsxi.svg"
        alt="Flyone logo"
        {...props}
        width={50}
        height={20}
        priority
    />
)
export default Brand
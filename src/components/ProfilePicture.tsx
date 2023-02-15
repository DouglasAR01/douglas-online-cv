interface Props {
  image: string
}
export default function ProfilePicture({ image }: Props) {
  const custom = {
    borderTopRightRadius: "20%",
    maxHeight: "40vh"
  }
  return (
    <>
      <div className="m-4 text-center">
        <img src={image} alt="Profile picture" className="img-fluid" style={custom} />
      </div>
    </>
  )
}
interface Props {
  image: string;
}
export default function ProfilePicture({ image }: Props) {
  const custom: React.CSSProperties = {
    borderTopRightRadius: "20%",
    maxHeight: "40vh",
  };
  return (
    <div className="mx-4 mb-2 text-center">
      <img
        src={image}
        alt="Profile picture"
        className="img-fluid"
        style={custom}
      />
    </div>
  );
}

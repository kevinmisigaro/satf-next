const Button = ({ name, link }: { name: string; link: string }) => {
  return (
    <a href={link} className={`btn bg-satfDarkBlue border-satfDarkBlue text-white px-10 hover:bg-satfDarkBlue rounded-3xl`}>
      {name}
    </a>
  );
};

export default Button;

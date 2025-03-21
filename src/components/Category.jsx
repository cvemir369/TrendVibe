import titleCase from "../utils/titleCase";

const Category = ({ category }) => {
  return (
    <a role="tab" className="tab">
      {titleCase(category)}
    </a>
  );
};

export default Category;

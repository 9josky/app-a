import styles from "./SearchBar.module.css";

const Search = ({ icon, web, address, google, text }) => {
  return (
    <div className="searchBar">
      <div className="searched">
        <i className={styles.icon}>{icon}</i>
        <span>{web}</span>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default Search;

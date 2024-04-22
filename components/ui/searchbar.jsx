import { useState } from 'react'
import styles from 'css/invalsia.module.css'
import Image from 'next/image'
import searchIcon from 'icon/google/search.png'
import api from 'util/api'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (term) => {
        try {
            const response = await api.get(`/v1/search?item=${term}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        handleSearch(term);
    };

    return (
        <form className={`${styles.iaFlex} ${styles.iaW100} ${styles.iaCustomNavSearch} ${styles.iaAlignCenter} ${styles.iaHeight40} ${styles.iaShadow}`}>
            <Image
                src={searchIcon}
                alt="search"
                width={48}
                height={48}
                className={`${styles.iaBox24} ${styles.iaSearchbarImg} ${styles.iaBlackImage} ${styles.iaMarginLeftNegative24}`}
            />
            <input
                type="search"
                name="searchbar"
                value={searchTerm}
                onChange={handleChange}
                className={`${styles.iaH100}`}
                autoComplete="off"
            />
        </form>
    );
}

export default SearchBar;

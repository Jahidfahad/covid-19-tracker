import React, { useState, useEffect } from 'react';

import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../../components/api'
import styles from './CountryPicker.module.css';

const CountryPicker = ({handleChangeCountry}) => {

const [fetchedCountries, setFetchedCountries] = useState([])

useEffect(() =>{
    const fetchApi = async () =>{
        setFetchedCountries(await fetchCountries())
    }
    fetchApi();
},[setFetchedCountries])


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleChangeCountry(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
               
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
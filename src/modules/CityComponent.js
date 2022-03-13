import styled from "styled-components";


const WeatherLogo =styled.img`
width: 140px;
height: 140px:
margin: 40px auto;
`

const Search =styled.img`
width: 10px;
height: 10px:
align-item: center;
opacity: 90%;
`

const ChooseCityLabel =styled.span`
color:black;
font-size:18px;
font-weight: bold;
margin: 20px auto;
`

const SearchBox =styled.form`
display: flex;
flex-direction: row;
border:#0eb96b solid 1.5px;
border-radius: 5px;
margin: auto;


& input{
    padding: 2px
    font-size: 10px;
    border: none;
    outline: none;
}

& button{
    opacity:20%;
    cursor: pointer;
    
    

}


`


const CityComponent =(props) => {
    const {updateCity, fetchWeather}=props;
    return (
        <>
        <WeatherLogo src="/icons/weatherlogo.png"/>
        <ChooseCityLabel>Know Weather of your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="Search your City" 
            onChange={(e)=>updateCity(e.target.value)} 
            />
            <button type="submit"> 
                <Search src="/icons/search.png"/>
            </button>
        </SearchBox>
        </>
        
    )

};

export default CityComponent;
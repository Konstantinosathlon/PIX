import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  
  onSearchSubmit = async ({term, color}) => {
    if(color){
    const response = await unsplash.get("/search/photos", {
      params: {color: color,
        query: term,
        page: 1,
        per_page: 5 }
    });
      this.setState({ images: response.data.results });
      console.log(this.state);}
      else {const response = await unsplash.get("/search/photos", {
        params: {
          query: term,
          page: 10,
          per_page: 100 }
      });
        this.setState({ images: response.data.results });
        console.log(response.data.results[100]);}
  }

  render() {
    return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images= {this.state.images} />
    </div>
  );
  }
}

export default App;

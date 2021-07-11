import React from "react";

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {term: "", color: ""};
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  buttonColor(){
      return (this.state.color==="white")||(this.state.color==="black_and_white")? "grey": this.state.color;
  };
 
  render() {
    return (
    <div className="ui segment" style = {{ height : 90, marginBottom: 110 }}>
      <form onSubmit={e => this.onFormSubmit(e)} className="ui form">
        <div className="field">
          <label>Image search</label>
          <input  type="text"
          value= {this.state.term}
          onChange={e=> this.setState({ term: e.target.value })} />
        </div>
        
        
            <div className="ui row equal width grid inline " style = {{marginTop: 10}}>
            <div className="row">
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="any color" value="" checked={this.state.color===""} 
                        onChange={e => this.setState({color: ""})
                        } 
                        />
                        <label>any color</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="black" value="black_and_white" checked={this.state.color==="black_and_white"} 
                        onChange={e => this.setState({color: e.target.value})
                        } 
                        />
                        <label>b & w</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="black" value="black" checked={this.state.color==="black"} 
                        onChange={e => this.setState({color: e.target.value})
                        } 
                        />
                        <label>black</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="white" value="white" checked={this.state.color==="white"}
                        onChange={e => this.setState({color: e.target.value})
                        } 
                        />
                        <label>white</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="orange" value="orange" checked={this.state.color==="orange"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>orange</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="red" value="red" checked={this.state.color==="red"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>red</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="purple" value="purple" checked={this.state.color==="purple"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>purple</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="green" value="green" checked={this.state.color==="green"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>green</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="teal" value="teal" checked={this.state.color==="teal"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>teal</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="blue" value="blue" checked={this.state.color==="blue"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>blue</label>
                    </div>
                </div>
                <div className="column">
                    <div className="ui radio checkbox">
                        <input type="radio" name="yellow" value="yellow" checked={this.state.color==="yellow"} 
                        onChange={e => this.setState({color: e.target.value})
                        }  
                        />
                        <label>yellow</label>
                    </div>
                </div>
                <button className={"ui mini column "+this.buttonColor()+" button"} onClick={e => console.log(e)} type="submit" style={{float: "right"}}>Submit</button>
              </div>
              </div>
      </form>
    </div>
  );
  }
}

export default SearchBar;

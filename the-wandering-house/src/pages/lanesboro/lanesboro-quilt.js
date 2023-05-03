import React, {Component} from 'react';
import PopUp from '../../components/pop-up/pop-up.component.jsx'
import '../../App.css';
import './lanesboro.css';
import { FirstPanel } from '../../components/panels/first-panel';
import { SecondPanel } from '../../components/panels/second-panel';
import { ThirdPanel } from '../../components/panels/third-panel';
import { PhonePanel } from '../../components/panels/phone-panel';

class LanesboroQuilt extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        width: 0, 
        height: 0, 
        showPopUp: false,
        popUpInfo: {},
        quiltPanel: 1,
        rectangleArray: [1,4,6,2,17,5,8,7,11,24,19,18,3,14,9,10,25,22,13,12,15,16,20,21,23]
      };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      this.activePopUp = this.activePopUp.bind(this);
      this.hidePopUp = this.hidePopUp.bind(this);
      this.handleClickChildElement = this.handleClickChildElement.bind(this);
      this.previousPanel = this.previousPanel.bind(this);
      this.nextPanel = this.nextPanel.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        //this.getPictures();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    activePopUp (pictureId){
        this.setState({ showPopUp: true });
        this.getPopUpInfo(pictureId);
    }
      
    hidePopUp(){
    this.setState({ showPopUp: false });
    this.setState({ popUpInfo: {} });
    }

    handleClickChildElement (event){
        event.stopPropagation();
    }

    chooseRandomFont() {
        let fontList = ['Kranky', 'Caveat', 'Shadows into Light Two', 'Architects Daughter', 'Fuzzy Bubbles', 'Lobster Two', 'Indie Flower', 'Patrick Hand', 'Cormorant Upright']
        const randomIndex = Math.floor(Math.random() * fontList.length);
        const choosedFont = fontList[randomIndex];
        return choosedFont;
    }

    nextPanel(){
        this.setState({ quiltPanel: this.state.quiltPanel + 1 });

    }

    previousPanel(){
        this.setState({ quiltPanel: this.state.quiltPanel - 1 });
    }
     

      getPopUpInfo(id){

        let temp_dict = 0
        fetch(`https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tblABLhHwNW3ewyQf?fields%5B%5D=ID&fields%5B%5D=Embroiderer&fields%5B%5D=Tittle&fields%5B%5D=Statement&fields%5B%5D=Translation&fields%5B%5D=Age&filterByFormula=ID%3D${id}`, {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer keyFiXILZhl7sQLsn'
            }
        })
        .then(response => response.json())
        .then(popUpAttributes => { temp_dict = { translation: popUpAttributes.records[0].fields.Translation,
                                                                title: popUpAttributes.records[0].fields.Tittle,
                                                                statement: popUpAttributes.records[0].fields.Statement,
                                                                age: popUpAttributes.records[0].fields.Age,
                                                                embroiderer: popUpAttributes.records[0].fields.Embroiderer,
                                                                main_font: this.chooseRandomFont(),
                                                                id: id,
                                                                }; console.log(`Pop up attributes: ${popUpAttributes.title}`); return temp_dict})

        .then(popUpInfoDict => this.setState({ popUpInfo: popUpInfoDict}));
        }

render() {
    const { age, statement, translation, embroiderer, title, main_font, id} = this.state.popUpInfo;

        if (this.state.width > 700){
            return(
                <div className='lanesboro-container'>
                    <div className='lanesboro-background'>
                        <div className='top-image'></div>
                        <div className='middle-image'></div>
                        <div className='top-image'></div>  
                    </div>

                    {( () => {
                    switch(this.state.quiltPanel){
                        case 1:
                        return <FirstPanel activePopUp={this.activePopUp} nextPanel={this.nextPanel}/>
                        case 2: 
                        return <SecondPanel activePopUp={this.activePopUp} nextPanel={this.nextPanel} previousPanel={this.previousPanel}/>
                        case 3: 
                        return <ThirdPanel activePopUp={this.activePopUp} previousPanel={this.previousPanel}/>
                        default:
                        return <FirstPanel activePopUp={this.activePopUp} nextPanel={this.nextPanel}/>
                    }
                    })()}
                {this.state.showPopUp === true ? 
                    <div className="pop-up-container" onClick={this.hidePopUp}>
                    <PopUp onClick={this.handleClickChildElement}  translation={translation} statement={statement}  age={age} main_text={title} embroiderer={embroiderer} main_font={main_font} id={id} quilt={"lanesboro"}/>
                    </div>
                    : null}
                </div>
            );
               
            }
            

        else{
            return(
                <div className='lanesboro-container'>
                    <div className='lanesboro-background'>
                        <div className='top-image'></div>
                        <div className='middle-image'></div>
                        <div className='top-image'></div>  
                    </div>
                    <PhonePanel rectangleArray ={this.state.rectangleArray} activePopUp={this.activePopUp}/>

                    {this.state.showPopUp === true ? 
                    <div className="pop-up-container" onClick={this.hidePopUp}>
                    <PopUp onClick={this.handleClickChildElement}  translation={translation} statement={statement}  age={age} main_text={title} embroiderer={embroiderer} main_font={main_font} id={id} quilt={"lanesboro"}/>
                    </div>
                    : null}
                    

                </div>
            )
        }
}
}

export default LanesboroQuilt;
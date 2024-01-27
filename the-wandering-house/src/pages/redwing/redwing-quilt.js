import React, {Component} from 'react';
import '../../App.css';
import { FirstPanel } from '../../components/panels/redwing-panels/first-panel.jsx';
import { SecondPanel } from '../../components/panels/redwing-panels/second-panel.jsx';
import { ThirdPanel } from '../../components/panels/redwing-panels/third-panel.jsx';
import { OnlyAudioPopUp } from '../../components/pop-up/pop-ups-redwing/onlyAudioPopUp.jsx';
import { AudioStatementPopUp } from '../../components/pop-up/pop-ups-redwing/audioStatementPopUp.jsx';
import { OnlyImagePopUp } from '../../components/pop-up/pop-ups-redwing/onlyImagePopUp.jsx';
import { ImageStatementPopUp } from '../../components/pop-up/pop-ups-redwing/imageStatementPopUp.jsx';
import { PersonalizedOnlyImagePopUp } from '../../components/pop-up/pop-ups-redwing/personalizedOnlyImagePopUp.jsx';
import { PhonePanel } from '../../components/panels/redwing-panels/phone-panel.jsx';
import {PopUpPhone} from '../../components/pop-up/pop-ups-redwing/popUpPhone.jsx';



class RedWingQuilt extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          width: 0, 
          height: 0, 
          showPopUp: false,
          popUpInfo: {},
          quiltPanel: 1,
          popUpType: '',
          popUpAudio: [1,4,5,6,7,8,10,11,15,16,17,19,21,22,24,27,28,30,31,33,34,35,38,39,41,42,43,44,45,47,48,49,
            50,51,54, 56, 57, 58],
          popUpImage: [20,25,29,37, 18],
          popUpImagePersonalized: [2,3,13,14,23,53],
          popUpAudioStatement: [9,26,32,55,59,60],
          popUpImageStatement: [12, 36, 20],
          rectangleArray: [1,6,5,4,7,8,22,11,15,16,17,18,19, 21,10,41,27,28,30,33,31,34,35,38,39,49,42,44,45, 46,47,48,
            50,51,53,54, 56, 23, 55, 2, 3,13,14,20,25,57,29,58,9, 26, 32, 37, 59, 60, 12, 36],
          rectanglesWithoutAudio : [20,25,29,37, 18,2,3,13,14,23,53, 12, 36]
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.activePopUp = this.activePopUp.bind(this);
        this.hidePopUp = this.hidePopUp.bind(this);
        this.handleClickChildElement = this.handleClickChildElement.bind(this);
        this.previousPanel = this.previousPanel.bind(this);
        this.nextPanel = this.nextPanel.bind(this);
    }


    // Need to calculate screen size to determine which version of the website to show: pc or mobile 
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    activePopUp (pictureId){
        

        if (this.state.popUpImageStatement.includes(pictureId)){
            this.setState({ popUpType: 'imageStatement' });
        }
        else if(this.state.popUpAudioStatement.includes(pictureId)){
            this.setState({ popUpType: 'audioStatement' });
        }
        else if(this.state.popUpImage.includes(pictureId)){
            this.setState({ popUpType: 'onlyImage' });
        }
        else if(this.state.popUpImagePersonalized.includes(pictureId)){
            this.setState({ popUpType: 'onlyImagePersonalized' });
        }
        else if(this.state.popUpAudio.includes(pictureId)){
            this.setState({ popUpType: 'onlyAudio' });
        }
        else{
            console.log("invalid pop up type")
        }
        this.getPopUpInfo(pictureId);
        this.setState({ showPopUp: true });
    }
      
    hidePopUp(){
    this.setState({ showPopUp: false });
    this.setState({ popUpInfo: {} });
    }

    handleClickChildElement (event){
        event.stopPropagation();
    }

    nextPanel(){
        this.setState({ quiltPanel: this.state.quiltPanel + 1 });
    }

    previousPanel(){
        this.setState({ quiltPanel: this.state.quiltPanel - 1 });
    }

    getPopUpInfo(id){

        let temp_dict = 0
        fetch(`https://api.airtable.com/v0/appjPLcxTlXQZZfMa/tbljmhfMewVm4EEBt?fields%5B%5D=ID&fields%5B%5D=Embroiderer&fields%5B%5D=Title&fields%5B%5D=Statement&fields%5B%5D=Translation&fields%5B%5D=Age&filterByFormula=ID%3D${id}`, {
            method: 'GET',
            headers: {
            'Authorization': 'Bearer patRF4X7N5tJ6LjhF.7305d5e0fccd093c57f4c2271ca5a00cf89c9124066c9861f0b4e74a1be6c73a'
            }
        })
        .then(response => { console.log(''); return(response.json());})
        .then(popUpAttributes => { temp_dict = { translation: popUpAttributes.records[0].fields.Translation,
                                                                title: popUpAttributes.records[0].fields.Title,
                                                                statement: popUpAttributes.records[0].fields.Statement,
                                                                age: popUpAttributes.records[0].fields.Age,
                                                                embroiderer: popUpAttributes.records[0].fields.Embroiderer,
                                                                id: id,
                                                                }; console.log(''); return temp_dict})

        .then(popUpInfoDict => this.setState({ popUpInfo: popUpInfoDict}));
    }
    

    render() {
        
        const { age, statement, translation, embroiderer, title, id } = this.state.popUpInfo;
        
        if (this.state.width > 700){
            
            return(
                <div className='redwing-container'>
                            
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
                        {( () => {
                            switch(this.state.popUpType){
                                case 'onlyAudio':
                                    return <OnlyAudioPopUp onClick={this.handleClickChildElement}  translation={translation} age={age} title={title} embroiderer={embroiderer} id={id} />
                                case 'onlyImage': 
                                    return <OnlyImagePopUp onClick={this.handleClickChildElement}  translation={translation} age={age} title={title} embroiderer={embroiderer} id={id}   />
                                case 'audioStatement': 
                                    return <AudioStatementPopUp onClick={this.handleClickChildElement}  translation={translation} age={age} title={title} embroiderer={embroiderer} statement={statement} id={id} />
                                case 'imageStatement':
                                    return <ImageStatementPopUp onClick={this.handleClickChildElement}  translation={translation} age={age} title={title} embroiderer={embroiderer} statement={statement} id={id} />
                                case 'onlyImagePersonalized':
                                    return <PersonalizedOnlyImagePopUp onClick={this.handleClickChildElement}  translation={translation} age={age} title={title} embroiderer={embroiderer} id={id}   />
                                default:
                                    return <h1>Error</h1>
                            }
                        })()}
                    </div>
                    : null}
                </div>
            );
                       
        }
        else{
           return(
             <div>
                <PhonePanel rectangleArray = {this.state.rectangleArray} activePopUp={this.activePopUp}/>
                    {this.state.showPopUp === true ? 
                    <div className="pop-up-container" onClick={this.hidePopUp}>
                    <PopUpPhone onClick={this.handleClickChildElement}  translation={translation} statement={statement}  age={age} title={title} embroiderer={embroiderer} id={id} quilt={"lanesboro"} rectanglesWithoutAudio={this.state.rectanglesWithoutAudio}/>
                    </div>
                    : null}
             </div>
            )
        }
    }


}
export default RedWingQuilt;


import React, { Component } from 'react';
import './Form.css'
import Logo from './logo.png'



function CreateButton(props){
	return (<button onClick={props.onClick}>{props.name}</button>);			
}

				 
class Menu extends Component{
	constructor(props){
		super(props);
		
		this.goToAccueil = this.goToAccueil.bind(this);
		this.goToDonnees = this.goToDonnees.bind(this);
		this.goToForm = this.goToForm.bind(this);
		
	}
	
	goToAccueil(){
		this.props.val.displayAccueil();
	}
	
	goToDonnees(){
		this.props.val.displayDonnees();
	}
	
	goToForm(){
		this.props.val.displayForm();
	}
	
	
	render(){
		let buttonAccueil = <CreateButton onClick={this.goToAccueil} name="Accueil"/>;
		let buttonDonnees = <CreateButton onClick={this.goToDonnees} name="Donnees"/>;
		let buttonSaisir = <CreateButton onClick={this.goToForm} name="Saisir" />;		
			
		return(
			<div className="menu-principal">
				{buttonAccueil}
				{buttonDonnees}
				{buttonSaisir}
			</div>
		);		
	}
}


class Accueil extends Component{
	constructor(props){
		super(props);		
	}
	
	render(){
		return(
			<div className="Accueil">
				<h1>Bienvenue à l&acute;accueil de ReactJS</h1>
				<img src={Logo} alt="logo apside"/>			
			</div>
		);		
	}
}


class Form extends Component{	
	constructor(props){
		super(props);
		this.handleChangeIsCompleted = this.handleChangeIsCompleted.bind(this);
		this.handleChangePrenom = this.handleChangePrenom.bind(this);
		this.handleChangeNom = this.handleChangeNom.bind(this);
		this.handleChangeTel = this.handleChangeTel.bind(this);
		this.handleChangeMail = this.handleChangeMail.bind(this);		
	}
	
	handleChangePrenom(event){
    	this.props.val.changePrenom(event.target.value);                
    }
	
	handleChangeNom(event){
		this.props.val.changeNom(event.target.value);
	}

	handleChangeMail(event){
		this.props.val.changeMail(event.target.value);
	}
          
	handleChangeTel(event){	
		this.props.val.changeTel(event.target.value);
	}
	
	handleChangeIsCompleted(event){		
		var objet = this.props.val.state;	

		if(objet.nom === "" || objet.prenom === "" || objet.mail === "" || objet.tel === ""){
			this.props.val.missValue();
			event.preventDefault();			
		}
		
		else if(isNaN(this.props.val.state.tel)){
			this.props.val.telNotNumber();
			event.preventDefault();
		}
		/*else if(this.props.val.state.tel>9999999999 || this.props.val.state.tel<100000000){		
			this.props.val.telNotFull();
			event.preventDefault();
		}*/
		else{
			
			this.props.val.changeIsCompleted();		
			event.preventDefault();						
		}		
	}
	
	render(){				
		return(
		<div>
			<h1 className="titre-form">Bienvenue sur votre formulaire !</h1>
			<form className="form" onSubmit={this.handleChangeIsCompleted}>
				<div>
					<label for="prenom">Prenom</label>
					<input type="text" name="prenom" id="prenom" onChange={this.handleChangePrenom} /> 
				</div>
				<div>
					<label for="nom" >Nom</label>
					< input type="text" id="nom" name="nom" onChange={this.handleChangeNom} />
				</div>
				<div>
					<label for="mail" >mail</label>
					<input type="email" id="mail" name="mail" onChange={this.handleChangeMail} />
				</div>
				<div>
					<label for="tel" >tel</label>
					<input type="tel" id="tel" name="tel" onChange={this.handleChangeTel} />
				</div>
				
				<input className="bouton-submit" type="submit" value="Envoyer" />
			</form>
		</div>
		);
	}
}


class ValuesForm extends Component{
	
	constructor(props){
		super(props);	
	}

	render(){
		return(
			<table >
				<tr>
					<th>id</th>
					<th>Prenom</th>
					<th>Nom</th>
					<th>Mail</th>
					<th>Tel</th>					
				</tr>
				<tbody>
					{this.props.val}					
				</tbody>				
			</table>
		);
	}
}


class Update extends Component{
	
	constructor(props){
		super(props);	
		this.state = {prenom:"", nom:"", mail:"", tel:""};
		this.updateLine = this.updateLine.bind(this);
		this.handleChangePrenom = this.handleChangePrenom.bind(this);
		this.handleChangeNom = this.handleChangeNom.bind(this);
		this.handleChangeMail = this.handleChangeMail.bind(this);
		this.handleChangeTel = this.handleChangeTel.bind(this);
	}
	
	updateLine(event){			
		this.props.val.deleteForUpdate(this.props.val.state.id-1);		
		this.props.val.changeIsCompleted();	
		event.preventDefault();	
	}
	
	handleChangePrenom(event){
    	this.props.val.changePrenom(event.target.value);                
    }
	
	handleChangeNom(event){
		this.props.val.changeNom(event.target.value);
	}

	handleChangeMail(event){
		this.props.val.changeMail(event.target.value);
	}
          
	handleChangeTel(event){	
		this.props.val.changeTel(event.target.value);
	}
	
	handleChangeIsCompleted(event){		
		var objet = this.props.val.state;	

		if(objet.nom === "" || objet.prenom === "" || objet.mail === "" || objet.tel === ""){
			this.props.val.missValue();
			event.preventDefault();			
		}
		
		else if(isNaN(this.props.val.state.tel)){
			this.props.val.telNotNumber();
			event.preventDefault();
		}
		/*else if(this.props.val.state.tel>9999999999 || this.props.val.state.tel<100000000){		
			this.props.val.telNotFull();
			event.preventDefault();
		}*/
		else{
			
			this.props.val.changeIsCompleted();		
			event.preventDefault();						
		}		
	}
	
	render(){
		var objet = this.props.val.state;
		var id = objet.id-1;		
		return(		
			<form onSubmit={this.updateLine} >
				<label for="prenom">prenom</label>
				<input id="prenom" name="prenom" onChange={this.handleChangePrenom} placeholder={objet.tab[id].props.prenom}/>
				
				<label  for="nom">nom</label>
				<input id="nom" name="nom" onChange={this.handleChangeNom} placeholder={objet.tab[id].props.nom}/>
				
				<label for="mail'">mail</label>
				<input id="mail" name="mail" onChange={this.handleChangeMail} placeholder={objet.tab[id].props.mail}/>
			
				<label for="tel">tel</label>
				<input id="tel" name="tel" onChange={this.handleChangeTel} placeholder={objet.tab[id].props.tel}/>
			
				<input type="submit" value="Submit" />
			</form>			
		);
	}
}


class LinePeople extends Component{
	
	constructor(props){
		super(props);
		this.deleteProduct = this.deleteProduct.bind(this);
		this.updateProduct = this.updateProduct.bind(this);		
	}
	
	deleteProduct(){
		
		this.props.deleteProduct(this.props.id-1);		
			
	}
	
	updateProduct(){
		this.props.displayUpdate(this.props.id-1);	
	}
	
	render(){		
		return(
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.prenom}</td>
				<td>{this.props.nom}</td>
				<td>{this.props.mail}</td>
				<td>{this.props.tel}</td>
				<td><button onClick={this.updateProduct} color="blue" >Update</button></td>
				<td><button onClick={this.deleteProduct} color="red" >Delete</button></td>
			</tr>
		);
	}
}
	

class Display extends Component {
            
            constructor(props){
                super(props);
                this.state={ 	prenom: "",
					   			id: 1,
								nom:"",
								mail:"" ,
								tel:"",
						   		isCompleted: false,
						   		notNumber: false,
					   			missValue: false,
						   		accueil: true,
								form: false,
								donnees: false,
					   			update:false,
					   			idUpdate: 0,
								numberNotFull: false,
					   			tab: []
						   };
                
               this.changePrenom = this.changePrenom.bind(this);
			this.changeNom = this.changeNom.bind(this);
			this.changeMail = this.changeMail.bind(this);
			this.changeTel = this.changeTel.bind(this);				
               this.changeIsCompleted = this.changeIsCompleted.bind(this);				
			this.displayAccueil = this.displayAccueil.bind(this);
			this.displayDonnees = this.displayDonnees.bind(this);
			this.displayForm = this.displayForm.bind(this);
			this.telNotNumber = this.telNotNumber.bind(this);
			this.telNotFull = this.telNotFull.bind(this);
			this.deleteProduct = this.deleteProduct.bind(this);			
			this.findId = this.findId.bind(this);
			this.missValue = this.missValue.bind(this);
			this.displayUpdate = this.displayUpdate.bind(this);
			this.deleteForUpdate = this.deleteForUpdate.bind(this);
            }
            
			/* supprimer le produit de tab[] grace à idProduct */
			deleteProduct(idProduct){			
				this.setState({
						tab: this.state.tab.filter((_, i) => i !== idProduct)
				});
				this.displayDonnees();				
				
			}
			
			deleteForUpdate(idProduct){				
				var array = this.state.tab;
				array.splice(idProduct,1);
				this.setState({tab: array});
			}

			changePrenom(prenom){
                this.setState({prenom});                
			}
	
			changeNom(nom){					
				this.setState({nom});								
			}

			changeMail(mail){
				this.setState({mail});
			}	
            
			changeTel(tel){
				this.setState({tel: tel});
			}
	
			changeIsCompleted(){				
				this.state.tab.push(<LinePeople key={this.findId()} id={this.findId()} nom={this.state.nom}  prenom={this.state.prenom} mail={this.state.mail} tel={this.state.tel} deleteProduct={this.deleteProduct} displayUpdate={this.displayUpdate} /> );				
				this.setState(prevState => ({isCompleted: !prevState.isCompleted}));								
				this.displayDonnees();				
			}
		
			telNotFull(){
				this.setState( prevState => ({numberNotFull: !prevState.numberNotFull}));
			}
	
			telNotNumber(){
				this.setState(prevState => ({notNumber: !prevState.notNumber}));
			}

			missValue(){
				this.setState( prevState => ({missValue: !prevState.missValue}));
			}
	
			displayAccueil(){
				this.setState({accueil: true, form: false, donnees: false, update:false});
			}
	
			displayForm(){
				this.setState({accueil: false, form: true, donnees: false, update: false});				
			}
	
			displayDonnees(){
				this.setState({accueil: false, form: false, donnees: true, update: false});
			}
	
			displayUpdate(id){
				this.setState({donnees: false, form: false, accueil:false, update:true, idUpdate: id});				
			}

			findId(){
				var cpt=1;
				this.state.tab.forEach( line => {
					if(line.props.id !== cpt)
						return cpt;
					else
						cpt++;
				});
				return cpt;				
			}			

            
            render(){
				let page = null;
				let erreur = null;
				
				if(this.state.accueil)
					page = <Accueil />;
					
				else if(this.state.donnees)
					page = <ValuesForm val={this.state.tab}/>	
				
			  	else if(this.state.update)
					page = <Update val={this}/>
			  
				else if(this.state.form){
					
					if(this.state.notNumber)
						erreur = <p>Le numero de téléphone doit être un nombre</p>
					else if(this.state.numberNotFull)
						erreur = <p>Le numéro de téléphone n&rsquo;est pas complet</p>	
					else if(this.state.missValue)
						erreur = <p>Champs manquant</p>
					page = <Form val={this} />
				}
				
                return(
					<div className="main">
						<div className="header-form">
							<Menu val={this}/>
						</div>
						<div className="body-form">								
							{page}								
							{erreur}
						</div>						
					</div>
                );                
            };
        }
		
	
export default Display;
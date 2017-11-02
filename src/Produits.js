import React, { Component } from 'react';

var PRODUCTS={
	'1': {id: 1, libelle: "chaise", prix: 30, dispo: true },
	'2': {id: 2, libelle: "bureau", prix: 50, dispo:false},
	'3': {id: 3, libelle: "ordi", prix: 200, dispo:true},
	'4': {id: 4, libelle: "ecran", prix:100, dispo:true}	
};

class TableProduit extends Component{

    constructor(props){
	   super(props);
	   this.state={sort: {
				    column: 'name',
				    direction: 'desc'
				  }
			    };
    }
	
	sortProducts() {
    		let tab = Object.keys(this.props.prod).map((pid) => this.props.prod[pid]);
    		return tab;
  	}
	
	
	render(){
		var row = [];
		this.sortProducts().forEach(ligne => {			
			row.push(<LigneProduit produit={ligne} key={ligne.id} />);
		});
		return(
			<div className="ligneProduit">
				<table>
					<tr>
						<th>Libelle</th>
						<th>prix</th>
						<th>dispo</th>
					</tr>
					<tbody>		
						{row}
					</tbody>
				</table>
			</div>
		);
	}
}

class LigneProduit extends Component{
	constructor(props){
		super(props);				
	}
	
	render(){
		return(			
			<tr>
				<td>{this.props.produit.libelle}</td>
				<td>{this.props.produit.prix}</td>
				<td>{this.props.produit.dispo}</td>
			</tr>		
		);
	}
}

class Display extends Component{
	constructor(props){
		super(props);
		this.state = {produits: PRODUCTS};
	}
	
	render(){
		return(
			<TableProduit prod={this.state.produits}/>
		);
	}
}

export default Display;
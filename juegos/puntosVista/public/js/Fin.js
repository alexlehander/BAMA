class Fin extends React.Component{
    render(){
        var clase = "";
        if(this.props.porcentaje >= 80){
            clase = "bg-success";
        }else if(this.props.porcentaje >= 25){
            clase = "bg-warning";
        }else{
            clase = "bg-danger";
        }

        return(
            <div>
                <div className={"row border rounded " + clase}>
                    <div className="col-6 offset-3 text-center text-white">
                        <h1 className="display-1">{this.props.porcentaje}%</h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <button onClick={this.props.reiniciar} className="btn btn-principal">Volver a jugar</button>
                    </div>
                </div>
            </div>
        );
    }
}
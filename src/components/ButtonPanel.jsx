export default function ButtonPanel(props){
    return(
        <div class="button-panel">
            <div class="danger col-6">
                <button class="btn btn-danger">Close connection</button>
            </div>
            <div class="save-ref col-6">
                <button class="btn btn-success btn-save"onClick={props.onSend}>Save</button>
                <button class="btn btn-primary btn-ref" onclick={props.onRef}>Refresh</button>
            </div>
        </div>
    )
}
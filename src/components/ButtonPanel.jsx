import Regulator from "./Regulator"

export default function ButtonPanel(){
    return(
        <div class="button-panel">
            <div class="danger col-6">
                <button class="btn btn-danger">Close connection</button>
            </div>
            <div class="save-ref col-6">
                <button class="btn btn-success btn-save">Save</button>
                <button class="btn btn-primary btn-ref" onclick={() => window.location.reload()}>Refresh</button>
            </div>
        </div>
    )
}
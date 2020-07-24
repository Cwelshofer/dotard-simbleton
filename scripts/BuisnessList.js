import { useBusinesses, yorkBusinesses } from "./BuisnessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businesses")


export const businessList = () => {
    const businessArray = useBusinesses()
    const yorkArray = yorkBusinesses
    let jobHTMLRep = ""
    
    // businessArray.forEach(businessObject => jobHTMLRep += Business(businessObject) )
    businessArray.forEach(
        (businessObject) => {
            jobHTMLRep += Business(businessObject)
        }
    );
    let yorkHTMLRep = ""
    yorkArray.forEach(
        (businessObject) => {
            yorkHTMLRep += Business(businessObject)
        }
    )
    contentTarget.innerHTML = `
    ${jobHTMLRep}
    ${yorkHTMLRep}`
}


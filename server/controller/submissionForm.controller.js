import Form from "../modals/form.model.js"; 

export const createSubs = async (req, res) => {
    try { 
        const { name, email, feedback } = req.body; 
        if(!name || !email || !feedback) {
            return res.status(400).json({ message: "Please fill all fields." });
        }
        const form = await Form.create({ name, email, feedback });
        if(!form) {
            return res.status(400).json({ message: "Form was not created." });
        }
        return res.status(201).json({ message: "Form created successfully." });
    } catch (error) {
        console.log("Error in the form creation controller :->" + error);
        return res.status(500).json({ message: "Server error." });
    }
}
export const getSubs = async (req, res) => {
    try { 
        const forms = await Form.find({}); // find all the form submissions : 
        console.log("Forms : " + forms);
        return res.status(200).json({ forms }) ;
    } catch (error) {
        console.log("ERROR IN THE FORM SUBMMISON GETTING : " + error); 
        return res.status(500).json({ message: "Server error." });
    }
} 
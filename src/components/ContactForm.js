import { useForm } from "../hooks/useForm";
import { Form, Button } from 'react-bootstrap';

const initialForm = {
    name:"",
    email:"",
    subject:"",
    comments:""
};

const validationForm = (form)=>{
    let errors={}
    let regexName=/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail=/^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments=/^.{1,255}$/;

    if(!form.name.trim()){
        errors.name="El campo 'Nombre es requerido'";
    }else if(!regexName.test(form.name.trim())){
        errors.name="El campo nombre solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        errors.email="El campo 'Email es requerido'";
    }else if(!regexEmail.test(form.email.trim())){
        errors.email="El campo email es incorrecto";
    }

    if(!form.subject.trim()){
        errors.subject="El campo 'Asunto es requerido'";
    }

    if(!form.comments.trim()){
        errors.comments="El campo 'Comments es requerido'";
    }else if(!regexComments.test(form.comments.trim())){
        errors.comments="El campo comentarios no debe exceder los 255 caracteres";
    }



    return errors;
}

const ContactForm =()=>{

    const {form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationForm);

    return(
        <div>
            <h2>Formulario de Contact</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="name" 
                        placeholder="Escribe tu nombre" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.name} 
                        required
                    />
                    {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Escribe tu email" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.email} 
                        required
                    />
                    {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="subject" 
                        placeholder="asunto a tratar" 
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.subject} 
                        required
                    />
                    {errors.subject && <p style={{color:"red"}}>{errors.subject}</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea" 
                        name="comments" 
                        cols="50" 
                        rows="5" 
                        placeholder="Escribe tus comentarios"
                        onBlur={handleBlur} 
                        onChange={handleChange} 
                        value={form.comments} 
                        required
                    />
                    {errors.comments && <p style={{color:"red"}}>{errors.comments}</p>}
                </Form.Group>
                <Button type="submit" value="enviar">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}

export default ContactForm;
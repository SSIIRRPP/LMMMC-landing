import { Button, Container, Form, FormControl, Spinner } from "react-bootstrap";
import { useCallback, useState, useContext } from "react";
import "./styles/ContactForm.scss";
import { Link } from "react-router-dom";
import { baseApiUrl, possibleSubjects, recaptchaKey } from "../../constants";
import validateContactForm, { validations } from "./contactValidation";
import LanguageContext from "../../contexts/LanguageContext";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  content: "",
  agreement: false,
};

const initialErrorsState = {
  name: null,
  email: null,
  subject: null,
  content: null,
  agreement: null,
};

const Forms = ({
  state,
  errors,
  setChange,
  handleSubmit,
  sending,
  sendSuccess,
  sendError,
}) => {
  const {
    text: {
      Contact: {
        Form: {
          name,
          email,
          subject,
          message,
          subjectPlaceholder,
          subjectOptions,
          checkLabel,
          checkLink,
          button,
          feedback: { success, error },
        },
      },
    },
  } = useContext(LanguageContext);
  return (
    <Form className="ContactForm__form" onSubmit={handleSubmit}>
      <Form.Group className="ContactForm__item">
        <Form.Label>{name}</Form.Label>
        <Form.Control
          required
          value={state.name}
          isInvalid={errors.name}
          name="name"
          onChange={setChange}
          type="text"
        />
        <FormControl.Feedback type="invalid">
          {errors.name}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className="ContactForm__item">
        <Form.Label>{email}</Form.Label>
        <Form.Control
          required
          value={state.email}
          isInvalid={errors.email}
          name="email"
          onChange={setChange}
          type="email"
        />
        <FormControl.Feedback type="invalid">
          {errors.email}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className="ContactForm__item">
        <Form.Label>{subject}: </Form.Label>
        <Form.Select
          required
          value={state.subject}
          name="subject"
          isInvalid={errors.subject}
          onChange={setChange}
          type="select"
        >
          <option value={"none"}>{subjectPlaceholder}</option>
          {possibleSubjects.map((o) => (
            <option key={`subject-"${o}"`} value={o}>
              {subjectOptions[o]}
            </option>
          ))}
        </Form.Select>
        <FormControl.Feedback type="invalid">
          {errors.subject}
        </FormControl.Feedback>
      </Form.Group>
      <Form.Group className="ContactForm__item">
        <Form.Label>{message}: </Form.Label>
        <Form.Control
          required
          className="ContactForm__form--textarea"
          value={state.content}
          isInvalid={errors.content}
          name="content"
          onChange={setChange}
          as="textarea"
        />
        <FormControl.Feedback type="invalid">
          {errors.content}
        </FormControl.Feedback>
      </Form.Group>

      {sendSuccess ? (
        <p className="ContactForm__footer--feedback success">{success}</p>
      ) : null}
      {sendError ? (
        <p className="ContactForm__footer--feedback error">{error}</p>
      ) : null}
      <Form.Group className="ContactForm__footer">
        <Form.Check
          required
          value={state.agreement}
          name="agreement"
          onChange={setChange}
          isInvalid={errors.agreement}
          label={
            <>
              {checkLabel} <Link to="/aviso-legal">{checkLink}</Link>.
            </>
          }
        />
        <Button
          disabled={sendSuccess}
          className="ContactForm__footer--button"
          type="submit"
        >
          {sending ? (
            <Spinner
              className="ContactForm__footer--loader"
              size="sm"
              animation="border"
            />
          ) : null}
          {button}
        </Button>
      </Form.Group>
    </Form>
  );
};

const ContactForm = () => {
  const [state, setState] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [sending, setSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(null);

  const setChange = useCallback(
    (e) => {
      const { value, name, checked } = e.target;
      if (name !== "agreement") {
        setState((s) => ({ ...s, [name]: value }));
      } else {
        setState((s) => ({ ...s, [name]: checked }));
      }
      if (errors[name]) {
        setErrors((s) => validations[name](s, value));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const newErrors = validateContactForm(state, errors);
      setSendError(null);
      setErrors(newErrors);
      if (Object.values(newErrors).find((e) => !!e)) {
        // incorrect
        console.log("incorrect: ", newErrors);
      } else {
        // correct
        console.log("correct: ", newErrors);
        setSending(true);
        window.grecaptcha.enterprise.execute(recaptchaKey).then((r) => {
          console.log(r);
          window.grecaptcha.enterprise.reset(recaptchaKey);
          // then, fetch
          fetch(`${baseApiUrl}public/contact/email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...state, captcha: r }),
          })
            .then((res) => {
              console.log("form response: ", res);
              if (res.status === 200 || res.status === 204) {
                setSendSuccess(true);
              } else {
                setSendError(res);
              }
            })
            .catch((e) => {
              setSendError(e);
            })
            .finally(() => {
              setSending(false);
            });
        });
      }
    },
    [state, errors]
  );

  return (
    <Container className="ContactForm">
      <Forms
        state={state}
        errors={errors}
        sending={sending}
        sendSuccess={sendSuccess}
        sendError={sendError}
        setChange={setChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default ContactForm;

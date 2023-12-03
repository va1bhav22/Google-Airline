// // import * as Yup from "yup";

// const applyJobMutation = () => {
//     const applyJobSchema = [
//         {
//             key: "1",
//             name: "name",
//             label: "Name",
//             placeholder: "",
//             type: "text",
//             required: true,
//             validationSchema: Yup.string().required("Name is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "2",
//             name: "phone",
//             label: "Phone",
//             placeholder: "",
//             type: "number",
//             required: true,
//             validationSchema: Yup.string().required("Phone is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "3",
//             name: "email",
//             label: "Email",
//             placeholder: "",
//             type: "email",
//             required: true,
//             validationSchema: Yup.string()
//                 .email("Invalid email")
//                 .required("Email is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "4",
//             name: "positionApplied",
//             label: "Position Applied",
//             placeholder: "",
//             type: "text",
//             required: true,
//             validationSchema: Yup.string().required("Position is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "5",
//             name: "streetAddress",
//             label: "Street Address",
//             placeholder: "",
//             type: "text",
//             required: true,
//             validationSchema: Yup.string().required("Street Address is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "6",
//             name: "preferredLocation",
//             label: "Preferred Location",
//             placeholder: "",
//             type: "text",
//             required: true,
//             validationSchema: Yup.string().required("Preferred Location is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },

//         {
//             key: "7",
//             name: "experience",
//             label: "Relevant Experience (in years)",
//             type: "number",
//             required: true,
//             validationSchema: Yup.string().required("Experience is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12 no-spin",
//         },
//         {
//             key: "8",
//             name: "city",
//             label: "City",
//             type: "text",
//             required: true,
//             validationSchema: Yup.string().required("City is required!"),
//             initialValue: "",
//             className: "md:col-span-6 col-span-12",
//         },
//         {
//             key: "9",
//             name: "resume",
//             label: "Upload Resume",
//             type: "file",
//             required: true,
//             validationSchema: Yup.string().required("Resume is required!"),
//             initialValue: "",
//             className: "col-span-12",
//         },

//     ];
//     const applyJobSchemaInitialValue = applyJobSchema.reduce(
//         (accumulator, currentValue) => {
//             accumulator[currentValue?.name] = currentValue.initialValue;
//             return accumulator;
//         },
//         {} as { [key: string]: string }
//     );

//     const applyJobSchemaValidation = applyJobSchema.reduce(
//         (accumulator, currentValue) => {
//             accumulator[currentValue.name] = currentValue.validationSchema;
//             return accumulator;
//         },
//         {} as { [key: string]: Yup.StringSchema }
//     );

//     return {
//         applyJobSchema,
//         applyJobSchemaInitialValue,
//         applyJobSchemaValidation,
//     };

// };
// export { applyJobMutation };

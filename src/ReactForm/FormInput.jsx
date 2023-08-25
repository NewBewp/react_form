import React, { useState } from "react";

const FormInput = () => {
    //tạo state quản lý các ô input, lấy giá trị các ô input
    const [formValue, setFormValue] = useState();
    const [formError, setFormError] = useState();
    console.log("formError: ", formError);
    console.log("formValue: ", formValue);

    const handleFormValue = () => (ev) => {
        const { id, value, validity, minLength, maxLength } = ev.target;

        const { valueMissing, patternMismatch, tooShort } = validity;

        let mess;

        if (valueMissing) {
            mess = `Vui lòng nhập ${id}`;
        } else if (tooShort) {
            mess = `Vui lòng nhập tối thiểu ${minLength} ký tự`;
        } else if(patternMismatch){
            mess = `Vui lòng nhập đúng định dạng ${id}`
        }

        console.log("validity: ", validity);
        // console.log("tooShort: ", validity.tooShort);
        // console.log("tooLong: ", validity.tooLong);

        setFormError({
            ...formError,
            [id]: mess,
        });

        setFormValue({
            // ...formValue,
            // [name]: ev.target.value,

            ...formValue,
            [id]: value,
        });
    };

    return (
        <div className="text-start">
            <form
                className="form-fluid row"
                noValidate
                onSubmit={(ev) => {
                    ev.preventDefault(); //chặn reload của browser khi submit form
                    console.log("submit");
                }}
            >
                <h2 className="bg-dark text-white p-2">Thông tin sinh viên</h2>
                <div className="col-6 mt-2">
                    <label htmlFor="maSV" className="form-label">
                        Mã SV
                    </label>
                    <input
                        required // bắt buộc phải được nhập
                        minLength={3}
                        maxLength={5}
                        type="text"
                        className="form-control"
                        id="maSV"
                        placeholder="Nhập mã sinh viên"
                        value={formValue?.maSV || ""}
                        // onChange={(ev) => {
                        //     setFormValue({
                        //         ...formValue,
                        //         maSV: ev.target.value,
                        //     });
                        // }}
                        onChange={handleFormValue()}
                    />
                    {formError?.maSV && (
                        <p className="text-danger">{formError?.maSV}</p>
                    )}
                </div>

                <div className="col-6 mt-2">
                    <label htmlFor="name" className="form-label">
                        Họ tên
                    </label>
                    <input
                        required
                        
                        minLength={5}
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nhập họ tên"
                        value={formValue?.name || ""}
                        onChange={handleFormValue()}
                    />
                    {formError?.name && (
                        <p className="text-danger">{formError?.name}</p>
                    )}
                </div>

                <div className="col-6 mt-2">
                    <label htmlFor="phone" className="form-label">
                        Số điện thoại
                    </label>
                    <input
                    pattern = '[0-9]*$'
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Nhập số điện thoại"
                        value={formValue?.phone || ""}
                        onChange={handleFormValue()}
                    />
                    {formError?.phone && (
                        <p className="text-danger">{formError?.phone}</p>
                    )}
                </div>

                <div className="col-6 mt-2">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        // validity
                        required
                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder=""
                        value={formValue?.email || ""}
                        onChange={handleFormValue()}
                    />
                        {formError?.email && (
                        <p className="text-danger">{formError?.email}</p>
                    )}
                </div>
                <div className="mt-3">
                    <button className="btn btn-success">Thêm sinh viên</button>
                </div>
            </form>
        </div>
    );
};

export default FormInput;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactForm from "./ReactForm";
import { ReactFromActions } from "../store/reactForm/slice";

const TableResult = () => {
    const { studentList } = useSelector((state) => state.ReactFormStudent);
    // console.log("studentList: ", studentList);

    const dispatch = useDispatch();

    return (
        <div className="mt-4">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                    aria-describedby="button-search"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-search"
                >
                    Search
                </button>
            </div>

            <table className="table text-start">
                <thead className="table-dark py-2">
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {studentList.map((stu) => (
                        <tr key={stu?.maSV}>
                            <th>{stu?.maSV}</th>
                            <td>{stu?.name}</td>
                            <td>{stu?.phone}</td>
                            <td>{stu?.email}</td>
                            <td className="d-flex gap-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        dispatch(
                                            ReactFromActions.editStudent(stu)
                                        );
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        dispatch(
                                            ReactFromActions.deleteStudent(
                                                stu.maSV
                                            )
                                        );
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableResult;

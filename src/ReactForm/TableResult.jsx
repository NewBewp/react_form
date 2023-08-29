import React from "react";
import { useSelector } from "react-redux";

const TableResult = () => {
    const { studenList } = useSelector((state) => state.reactForm);
    console.log("studenList: ", studenList);
    return (
        <div className="mt-4">
            <div className="input-group mb-3">
                {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm"
                    aria-describedby="button-search"
                /> */}
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Nguyễn Văn A</td>
                        <td>093655453</td>
                        <td>A@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableResult;

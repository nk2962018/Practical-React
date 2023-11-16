import { useState } from 'react';
import *as xlsx from 'xlsx';

const FetchExcelData = () => {

    const [excelData, setExcelData] = useState([]);

    const readExcel = async(e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer(file);
        const excelFile = xlsx.read(data);
        const excelSheet = excelFile.Sheets[excelFile.SheetNames[0]];
        const excelJson = xlsx.utils.sheet_to_json(excelSheet);
        console.log(excelJson);
        setExcelData(excelJson);
    }
    return(
        <>
            <p>excel data</p>
            <input type="file" onChange={(e)=>readExcel(e)}/>
           
            <table border={1} width={1000}>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        excelData.map((getdata,index) =>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{getdata.Name}</td>
                                    <td>{getdata.email}</td>
                                    <td>{getdata.phone}</td>
                                    <td>{getdata.gender}</td>

                                </tr>
                            )
                            
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default FetchExcelData;
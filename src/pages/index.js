import React, { Component } from "react";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap";
import ComponentNavbar from "../components/ComponentNavbar";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      employees: [],
      select: 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  getEmployee = () => {
    const urlApi = "http://localhost:8081/employee";
    axios.get(urlApi).then((res) => {
      const data = res.data;
      console.log(data.data + "ini adalah data");
      this.setState({ employees: data.data.list });
      console.log(this.state.employees);
    });
  };

  componentDidMount() {
    this.getEmployee();
    console.log("apalahasdfasdf");
  }

  toggle(id) {
    this.setState({
      modal: !this.state.modal,
      select: id,
    });
  }

  onDelete = (id) => {
    console.log(id);
    const urlApi = `http://localhost:8081/employee/delete/${id}`;
    axios.delete(urlApi).then((res) => {
      console.log(res);
      if (res.status === 200) {
        this.getEmployee();
        this.setState({
          modal: !this.state.modal,
        });
      }
    });
  };

  render() {
    return (
      <div>
        <ComponentNavbar />
        <Container>
          <div style={{ borderStyle: "outset" }}>
            <h5 style={{ borderStyle: "outset" }}>List Data Karyawan</h5>
            <div
              style={{
                paddingRight: "30px",
                paddingLeft: "30px",
                paddingTop: "5px",
              }}
            >
              <Button color="primary" className="mb-3" href="/karyawan/add">
                Tambah
              </Button>
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Tanggal lahir</th>
                    <th>Jabatan</th>
                    <th>NIP</th>
                    <th>Jenis Kelamin</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.employees.map((employee, index) => {
                    let gender;
                    if (employee.gender === 1) {
                      gender = <td>Pria</td>;
                    } else {
                      gender = <td>Wanita</td>;
                    }
                    return (
                      <tr key={index}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.birthDate}</td>
                        <td>{employee.position.name}</td>
                        <td>{employee.idNumber}</td>
                        {gender}
                        <td align="center">
                          <Link to={`karyawan/edit/${employee.id}`}>
                            <Button className="mr-3" color="warning">
                              <FaPen />
                            </Button>
                          </Link>
                          <Button
                            color="danger"
                            onClick={() => this.toggle(employee.id)}
                            // href={employee.id}
                          >
                            <FaTrashAlt />
                          </Button>
                          {/* modal dimatikan sementara */}
                          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>
                              Konfirmasi
                            </ModalHeader>
                            <ModalBody>
                              Apakah Anda akan menghapus data ini...?
                            </ModalBody>
                            <ModalFooter>
                              <Button color="secondary" onClick={this.toggle}>
                                Tidak
                              </Button>
                              <Button
                                color="danger"
                                onClick={() => {
                                  this.onDelete(this.state.select);
                                }}
                                // href={employee.id}
                              >
                                Ya
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;

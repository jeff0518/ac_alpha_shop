import React from "react";
import styled from "styled-components";
import "../../sass/BaseStyled.css";

const StepContent = styled.div`
  margin-top: 64px;
  width: 540px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .formTitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
    }

    section {
      .firstRow,
      .secondRow,
      .thirdRow {
        display: flex;
      }

      div.inputGroup {
        .inputLabel {
          margin-bottom: 8px;
          font-weight: 700;
          font-size: 12px;
          line-height: 16px;
          margin-top: 24px;
        }

        input {
          padding: 0;
          margin-top: 8px;
          width: 350px;
          height: 40px;
          border-radius: 4px;
          border: 1px solid #5e5e5e;
        }
        .inputGroupInput {
          margin: 8px 30px 0 0;
          width: 255px;
          height: 40px;
          border-radius: 4px;
        }

        .selectContainer {
          select {
            margin: 8px 30px 0 0;
            width: 160px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #5e5e5e;
          }
        }
      }
    }
  }
`;

const Step1 = () => {
  return (
    <StepContent>
      <form data-phase="address">
        <h3 className="formTitle">寄送地址</h3>
        <section>
          <div className="firstRow">
            <div className="inputGroup">
              <div className="inputLabel">稱謂</div>
              <div className="selectContainer">
                <select>
                  <option value="mr" selected>
                    先生
                  </option>
                  <option value="ms">女士</option>
                  <option value="mx">不明</option>
                </select>
              </div>
            </div>
            <div className="inputGroup">
              <div className="inputLabel">姓名</div>
              <input type="text" placeholder="請輸入姓名" />
            </div>
          </div>
          <div className="secondRow">
            <div className="inputGroup">
              <div className="inputLabel">電話</div>
              <input
                className="inputGroupInput"
                type="tel"
                placeholder="請輸入行動電話"
              />
            </div>
            <div className="inputGroup">
              <div className="inputLabel">Email</div>
              <input
                className="inputGroupInput"
                type="email"
                placeholder="請輸入電子郵件"
              />
            </div>
          </div>
          <div className="thirdRow">
            <div className="inputGroup">
              <div className="inputLabel">縣市</div>
              <div className="selectContainer">
                <select required>
                  <option value="">請選擇縣市</option>
                  <option value="KLU">基隆市</option>
                  <option value="TPH">新北市</option>
                  <option value="TPE">臺北市</option>
                  <option value="TYC">桃園市</option>
                  <option value="HSH">新竹縣</option>
                  <option value="HSC">新竹市</option>
                  <option value="MAC">苗栗市</option>
                  <option value="MAL">苗栗縣</option>
                  <option value="TXG">臺中市</option>
                  <option value="CWH">彰化縣</option>
                  <option value="CWS">彰化市</option>
                  <option value="NTC">南投市</option>
                  <option value="NTO">南投縣</option>
                  <option value="YLH">雲林縣</option>
                  <option value="CHY">嘉義縣</option>
                  <option value="CYI">嘉義市</option>
                  <option value="TNN">臺南市</option>
                  <option value="KHH">高雄市</option>
                  <option value="IUH">屏東縣</option>
                  <option value="PTS">屏東市</option>
                  <option value="ILN">宜蘭縣</option>
                  <option value="ILC">宜蘭市</option>
                  <option value="HWA">花蓮縣</option>
                  <option value="HWC">花蓮市</option>
                  <option value="TTC">臺東市</option>
                  <option value="TTT">臺東縣</option>
                  <option value="PEH">澎湖縣</option>
                  <option value="KMN">金門縣</option>
                  <option value="LNN">連江縣</option>
                </select>
              </div>
            </div>
            <div className="inputGroup">
              <div className="inputLabel">地址</div>
              <input type="text" placeholder="請輸入地址" />
            </div>
          </div>
        </section>
      </form>
    </StepContent>
  );
}

export default Step1
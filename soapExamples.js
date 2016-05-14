  var processCheckout = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="tns:ns">
    <soapenv:Header>
        <tns:CheckOutHeader>
            <MERCHANT_ID>898945</MERCHANT_ID>
            <!-- $PASSWORD  = base64_encode(CAPITALISE(hash("sha256", $MERCHANT_ID + $passkey + $TIMESTAMP))); -->
            <PASSWORD>MmRmNTliMjIzNjJhNmI5ODVhZGU5OTAxYWQ4NDJkZmI2MWE4ODg1ODFhMTQ3ZmZmNTFjMjg4M2UyYWQ5NTU3Yw==</PASSWORD>
            <TIMESTAMP>20141128174717</TIMESTAMP>
        </tns:CheckOutHeader>
    </soapenv:Header>
    <soapenv:Body>
        <tns:processCheckOutRequest>
            <MERCHANT_TRANSACTION_ID>911-000</MERCHANT_TRANSACTION_ID>
            <REFERENCE_ID>1112254500</REFERENCE_ID>
            <AMOUNT>54</AMOUNT>
            <MSISDN>2547204871865</MSISDN>
            <!--Optional:-->
            <ENC_PARAMS></ENC_PARAMS>
            <CALL_BACK_URL>http://172.21.20.215:8080/test</CALL_BACK_URL>
            <CALL_BACK_METHOD>xml</CALL_BACK_METHOD>
            <TIMESTAMP>20141128174717</TIMESTAMP>
        </tns:processCheckOutRequest>
    </soapenv:Body>
</soapenv:Envelope>`

  var confirmTransaction = `<soapenv:Header>
    <tns:CheckOutHeader>
        <MERCHANT_ID>898945</MERCHANT_ID>
        <PASSWORD>MmRmNTliMjIzNjJhNmI5ODVhZGU5OTAxYWQ4NDJkZmI2MWE4ODg1ODFhMTQ3ZmZmNTFjMjg4M2UyYWQ5NTU3Yw==</PASSWORD>
        <TIMESTAMP>20141128174717</TIMESTAMP>
    </tns:CheckOutHeader>
</soapenv:Header>
<soapenv:Body>
    <tns:transactionConfirmRequest>
        <!--Optional:-->
        <TRX_ID>?</TRX_ID>
        <!--Optional:-->
        <MERCHANT_TRANSACTION_ID>911-000</MERCHANT_TRANSACTION_ID>
    </tns:transactionConfirmRequest>
</soapenv:Body>
</soapenv:Envelope>`

  var processCheckoutAction = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="tns:ns">
   <SOAP-ENV:Body>
      <ns1:processCheckOutResponse>
         <RETURN_CODE>00</RETURN_CODE>
         <DESCRIPTION>Success</DESCRIPTION>
         <TRX_ID>cce3d32e0159c1e62a9ec45b67676200</TRX_ID>
         <ENC_PARAMS/>
         <CUST_MSG>To complete this transaction, enter your Bonga PIN on your handset. if you don't have one dial *126*5# for instructions</CUST_MSG>
      </ns1:processCheckOutResponse>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

  var transactionConfirmed = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="tns:ns">
    <SOAP-ENV:Body>
        <ns1:transactionConfirmResponse>
            <RETURN_CODE>00</RETURN_CODE>
            <DESCRIPTION>Success</DESCRIPTION>
            <MERCHANT_TRANSACTION_ID/>
            <TRX_ID>5f6af12be0800c4ffabb4cf2608f0808</TRX_ID>
        </ns1:transactionConfirmResponse>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

var transactionCompleted = `<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="tns:ns">
    <SOAP-ENV:Body>
        <ns1:ResultMsg>
            <MSISDN ns1:type="xsd:string">254720471865</MSISDN>
            <AMOUNT ns1:type="xsd:string">54.0</AMOUNT>
            <M-PESA_TRX_DATE ns1:type="xsd:string">2014-12-01 16:24:06</M-PESA_TRX_DATE>
            <M-PESA_TRX_ID ns1:type="xsd:string">null</M-PESA_TRX_ID>
            <TRX_STATUS ns1:type="xsd:string">Success</TRX_STATUS>
            <RETURN_CODE ns1:type="xsd:string">00</RETURN_CODE>
            <DESCRIPTION ns1:type="xsd:string">Success</DESCRIPTION>
            <MERCHANT_TRANSACTION_ID ns1:type="xsd:string">911-000</MERCHANT_TRANSACTION_ID>
            <ENC_PARAMS ns1:type="xsd:string"></ENC_PARAMS>
            <TRX_ID ns1:type="xsd:string">cce3d32e0159c1e62a9ec45b67676200</TRX_ID>
        </ns1:ResultMsg>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`

var trasactionStatusQuery = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="tns:ns">
    <soapenv:Header>
        <tns:CheckOutHeader>
            <MERCHANT_ID>898945</MERCHANT_ID>
            <PASSWORD>MmRmNTliMjIzNjJhNmI5ODVhZGU5OTAxYWQ4NDJkZmI2MWE4ODg1ODFhMTQ3ZmZmNTFjMjg4M2UyYWQ5NTU3Yw==</PASSWORD>
            <TIMESTAMP>20141128174717</TIMESTAMP>
        </tns:CheckOutHeader>
    </soapenv:Header>
    <soapenv:Body>
        <tns:transactionStatusRequest>
            <!--Optional:-->
            <TRX_ID>?</TRX_ID>
            <!--Optional:-->
            <MERCHANT_TRANSACTION_ID>911-100</MERCHANT_TRANSACTION_ID>
        </tns:transactionStatusRequest>
    </soapenv:Body>
</soapenv:Envelope>`

var transactionStatusResponce = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="tns:ns">
    <soapenv:Header>
        <tns:CheckOutHeader>
            <MERCHANT_ID>898945</MERCHANT_ID>
            <PASSWORD>MmRmNTliMjIzNjJhNmI5ODVhZGU5OTAxYWQ4NDJkZmI2MWE4ODg1ODFhMTQ3ZmZmNTFjMjg4M2UyYWQ5NTU3Yw==</PASSWORD>
            <TIMESTAMP>20141128174717</TIMESTAMP>
        </tns:CheckOutHeader>
    </soapenv:Header>
    <soapenv:Body>
        <tns:transactionStatusRequest>
            <!--Optional:-->
            <TRX_ID>?</TRX_ID>
            <!--Optional:-->
            <MERCHANT_TRANSACTION_ID>911-100</MERCHANT_TRANSACTION_ID>
        </tns:transactionStatusRequest>
    </soapenv:Body>
</soapenv:Envelope>`


module.exports = {
	processCheckout:processCheckout,
	confirmTransaction:confirmTransaction,
	processCheckoutAction:processCheckoutAction,
	transactionConfirmed:transactionConfirmed,
	transactionCompleted:transactionCompleted,
	trasactionStatusQuery:trasactionStatusQuery,
	transactionStatusResponce:transactionStatusResponce
}
import { Alert, Button, Col, Form, Row } from "antd"
import { Alerts, StepProps, WizardValues } from "../lib/types"
import { useNavigate } from "react-router-dom"
import StepLayout from "../components/StepLayout"
import { useContext, useState } from "react"
import { StoreContext } from "../lib/provider"
import { submitHandler } from "../lib/handlers"

const Summary = ({ prevStep }: StepProps) => {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [store] = useContext(StoreContext)
  const [loading, setLoading] = useState(false)
  const [alertState, setAlertState] = useState<Alerts>({ message: undefined, show: false, type: undefined })

  const submit = async (data: WizardValues) => {
    setLoading(true)
    try {
      await submitHandler(data)
      setAlertState({ message: "Features enabled!", show: true, type: "success" })
    } catch (e) {
      setAlertState({ message: "Something went wrong!", show: true, type: "error" })
      throw new Error(`error: ${e}`)
    } finally {
      setLoading(false)
    }
  };

  return (
    <StepLayout title="Summary">
      <Form form={form} onFinish={() => submit(store)}>
        <div className="flex flex-col gap-3 mb-8">
          <Row>
            <Col span={6}>Name</Col>
            <Col span={12}>{store.name}</Col>
          </Row>
          <Row>
            <Col span={6}>Description</Col>
            <Col span={12}>{store.description}</Col>
          </Row>
          <Row>
            <Col span={6}>Features</Col>
            <Col span={12}>{store.selectedFeatures.join(', ')}</Col>
          </Row>
        </div>
        <div className="h-16 flex justify-between items-center gap-3">
          <div className="flex justify-start">
            {alertState.show && <Alert message={alertState.message} type={alertState.type} />}
          </div>
          <div className="flex justify-start gap-3">
            <Button disabled={loading} onClick={() => navigate(`/${prevStep}`)}>Previous</Button>
            <Button htmlType="submit" loading={loading}>Submit</Button>
          </div>
        </div>
      </Form>
    </StepLayout>
  )
}

export default Summary

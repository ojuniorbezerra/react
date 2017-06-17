import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContet from '../common/tab/tabContet'
import {init, create, update, remove} from './billingCycleActions'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'


class BillingCycle extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.init()
        
    }   

    render(){
        return (
            <div>
                <ContentHeader title="Ciclo de pagamento" small="Cadastro"/>

                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContet id="tabList">
                                <BillingCycleList/>
                            </TabContet>
                            <TabContet id="tabCreate">
                               <BillingCycleForm onSubmit={this.props.create} 
                               submitLabel="Criar" submitClass="primary"/>
                            </TabContet>
                            <TabContet id="tabUpdate">
                                 <BillingCycleForm onSubmit={this.props.update}
                                 submitLabel="Alterar" submitClass="info" />
                            </TabContet>
                            <TabContet id="tabDelete">
                                <BillingCycleForm readOnly={true} onSubmit={this.props.remove} 
                                submitLabel="Remover" submitClass="danger"/>
                            </TabContet>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle)
 
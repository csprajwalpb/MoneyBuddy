import { Ionicons } from "@expo/vector-icons"; 
import{Text, View, TouchableOpacity} from "react-native"
import { styles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { useRouter } from "expo-router";

const NoTransactionsFound = ()=>{
    const router = useRouter();
    return(
        <View style={styles.emptyState}>
            <Ionicons name="receipt-outline" size={60} color={COLORS.textLight} style={styles.emptyStateIcon}/>
            <Text style={styles.emptyStateTitle}>No Transactions yet</Text>         
            <Text style={styles.emptyStateText}>
                Start Tracking Your Finances By Adding Your First Transaction
                </Text>
                <TouchableOpacity style={styles.emptyStateButton} onPress={()=>router.push("/create")}>
                    <Ionicons name="add-circle" color={COLORS.white} size={18}/>
                    <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
                    </TouchableOpacity>  
        </View>
    )
}
export default NoTransactionsFound;